"use client";

import { Link2Icon } from "lucide-react";
import { useCallback, useState } from "react";

import {
  fetchOrganizations,
  generateInviteLink,
  inviteMembers,
} from "~/actions/inviteMembers";
import CustomButton from "~/components/common/common-button/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const InviteMemberModal: React.FC<ModalProperties> = ({ show, onClose }) => {
  const [emails, setEmails] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizations, setOrganizations] = useState<
    { id: string; name: string }[]
  >([]);
  const [inviteLink, setInviteLink] = useState("");
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [error, setError] = useState("");
  const [organizationsLoaded, setOrganizationsLoaded] = useState(false);

  const { toast } = useToast();

  const loadOrganizations = useCallback(async () => {
    if (organizationsLoaded) return;

    const response = await fetchOrganizations();
    if (response?.error) {
      setError(response.error);
    } else {
      setOrganizations(response.data || []);
      setOrganizationsLoaded(true);
    }
  }, [organizationsLoaded]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmails(event.target.value);
  };

  const handleOrganizationChange = (value: string) => {
    setOrganization(value);
  };

  const handleOrganizationDropdownOpen = () => {
    if (!organizationsLoaded) {
      loadOrganizations();
    }
  };

  // Clear error after a timeout
  const clearError = () => setTimeout(() => setError(""), 3000);

  // Function to handle invite submission via email
  const handleSubmit = async () => {
    setError("");

    const response = await inviteMembers(emails, organization);
    if (response?.error) {
      setError(response.error);
    } else {
      toast({
        title: "Success",
        description: "Your invite has been sent successfully to members' email",
        variant: "default",
      });
      setEmails("");
      onClose();
    }
  };

  // Function to generate the invite link
  const generateAndCopyInviteLink = async () => {
    if (!organization) {
      setError("Please select an organization first.");
      clearError();
      return;
    }

    const { data: inviteLinkData, error: inviteLinkError } =
      await generateInviteLink(organization);

    if (inviteLinkError) {
      setError(inviteLinkError);
      clearError();
    } else {
      setInviteLink(inviteLinkData); // Store the invite link
      setLinkGenerated(true);

      try {
        if (document.hasFocus()) {
          await navigator.clipboard.writeText(inviteLinkData);
          toast({
            title: "Invite Link",
            description: "Invite link copied to clipboard!",
          });
        } else {
          setError("Failed to copy invite link. Please manually copy it.");
          clearError();
        }
      } catch {
        setError("Failed to copy invite link to clipboard.");
        clearError();
      }
    }
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 border-b border-gray-300">
            <div className="mt-[-8px] flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-center">
              0P
            </div>
            <h2 className="mb-2 text-left text-lg text-neutral-dark-2">
              Invite to your Organization
            </h2>
          </DialogTitle>
          <DialogDescription>
            <div className="mb-7 mt-6">
              <label className="mb-2 block text-left text-base text-neutral-dark-2">
                Email
              </label>
              <input
                type="text"
                placeholder="email@example.com, email2@example.com..."
                className="w-full rounded-md border border-border px-3 py-2 shadow-sm outline-none focus:border-primary focus:ring-ring"
                value={emails}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className="mb-2 block text-left text-base text-neutral-dark-2">
                Add to Organization (Optional)
              </label>
              <Select
                onOpenChange={handleOrganizationDropdownOpen}
                onValueChange={handleOrganizationChange}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id}>
                        {org.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <span className="relative flex items-center text-primary">
                <Link2Icon className="pointer-events-none absolute ml-3" />
                <CustomButton
                  variant="subtle"
                  onClick={generateAndCopyInviteLink}
                  className="pl-10"
                >
                  Invite with link
                </CustomButton>
              </span>

              <CustomButton variant="primary" onClick={handleSubmit}>
                Send Invites
              </CustomButton>
            </div>
            {linkGenerated && (
              <div className="mt-4 hidden text-sm text-[#f85318]">
                <span className="">{inviteLink}</span>
              </div>
            )}

            {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InviteMemberModal;
