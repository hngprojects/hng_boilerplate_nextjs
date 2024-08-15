/* eslint-disable no-console */
"use client";

import axios from "axios";
import { Link2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { fetchOrganizations, InviteMembers } from "~/actions/organization";
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
// Importing apiUrl from the config file
import { auth } from "~/lib/auth";
import { apiUrl } from "./config"; // Importing apiUrl from the config file

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

interface Organization {
  id: string;
  name: string;
}

const InviteMemberModal: React.FC<ModalProperties> = ({ show, onClose }) => {
  const [emails, setEmails] = useState("");
  const [organization, setOrganization] = useState<string | null>("null");
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const [inviteLink, setInviteLink] = useState("");
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [error, setError] = useState("");

  // const apiUrl = useApiUrl();
  const { toast } = useToast(); // Initialize the toast hook
  useEffect(() => {
    const loadOrganizations = async () => {
      const { data, error } = await fetchOrganizations();
      if (data) {
        setOrganizations(data);
      } else {
        console.error("Error fetching organizations:", error);
        toast({
          title: "Error",
          description: "Failed to load organizations.",
          variant: "destructive",
        });
      }
    };

    loadOrganizations();
  }, [apiUrl]); //

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmails(event.target.value);
  };

  const handleOrganizationChange = (value: string) => {
    setOrganization(value);
  };

  const handleSubmit = async () => {
    if (!emails || !organization) {
      setError("Emails and Organization ID are required.");
      return;
    }

    const result = await InviteMembers(emails, organization); // Call the function

    if (result.data) {
      toast({
        title: "Success",
        description: "Invites sent successfully!",
        variant: "default",
      });
      onClose(); // Close the modal on success
    } else {
      setError(result.error || "Failed to send invites.");
      toast({
        title: "Error",
        description: result.error || "Failed to send invites.",
        variant: "destructive",
      });
    }
  };

  const handleInviteWithLink = async () => {
    try {
      const session = await auth();

      const response = await axios.post(
        `${apiUrl}/api/v1/invite/create`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        },
      );

      if (response.status === 200) {
        setInviteLink(response.data.invite_link);
        setLinkGenerated(true);
        navigator.clipboard.writeText(response.data.invite_link);
        toast({
          title: "Success",
          description: "Invite link copied to clipboard!",
          variant: "default",
        });
      } else {
        setError("Failed to generate invite link.");
        toast({
          title: "Error",
          description: "Failed to generate invite link.",
          variant: "destructive",
        });
      }
    } catch {
      setError("Failed to generate invite link.");
      toast({
        title: "Error",
        description: "Failed to generate invite link.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 border-b border-gray-300">
            <div className="mt-[-8px] flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-center">
              KP
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
              <Select onValueChange={handleOrganizationChange}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {organizations.map((organization) => (
                      <SelectItem key={organization.id} value={organization.id}>
                        {organization.name}
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
                  onClick={handleInviteWithLink}
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
              <div className="mt-4 text-sm text-green-500">
                Invite link: {inviteLink}
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
