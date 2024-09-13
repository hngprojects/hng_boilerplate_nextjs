import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import useApiUrl from "../../organization/members/member";
import MemberCard from "../MemberCard";
import DeleteSuccessModal from "../MemberDeleteModal";
import InviteModal from "../MemberInviteModal";
import SearchInput from "../Search";

const Member = () => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showInviteModal, setShowInviteModal] = useState<boolean>(false);
  const apiUrl = useApiUrl();

  useEffect(() => {
    const fetchData = async () => {
      // if (apiUrl) {
      //   try {
      //     const data = await fetchOrganization(apiUrl);
      //   } catch (error) {
      //     console.error("Error fetching organization data:", error);
      //   }
      // }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <section className="bg-white px-6 pb-6">
      <Card className="m-0 my-6 border-none shadow-none">
        <CardTitle>Member</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage who has access to this workspace
        </p>
      </Card>
      <CardContent className="mb-0 border-b border-t px-0 py-6">
        <div className="flex items-center justify-between space-x-4 rounded-md">
          <div className="max-w-[533px] flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Invite Link</p>
            <p className="text-sm text-muted-foreground">
              This provides a unique URL that allows anyone to join your
              workspace
            </p>
          </div>
          <Switch
            checked={showInviteModal}
            onCheckedChange={setShowInviteModal}
          />
        </div>
        <div className="flex items-center justify-between space-x-4 rounded-md pt-6">
          <div className="flex-1 space-y-1 rounded border border-gray-300 p-2">
            <p className="text-sm font-medium">
              This provides a unique URL that allows anyone to join your
              workspace
            </p>
          </div>
          <CustomButton
            variant="primary"
            onClick={() => {
              //   setShowInviteModal(true);
            }}
          >
            Copy
          </CustomButton>
        </div>
      </CardContent>
      <CardContent className="mb-0 px-0 py-6">
        <div className="flex items-center justify-between space-x-4 rounded-md">
          <div className="max-w-[894px]">
            <p className="text-xl font-medium leading-none">Manage members</p>
            <p className="mt-3 text-sm text-muted-foreground">
              On the Free plan all members in a workspace are administrators.
              Upgrade to a paid plan to add the ability to assign or remove
              administrator roles.
              <span className="items-center text-primary">
                Go to Plans
                <ArrowRight
                  color="hsl(25 95% 53%)"
                  className="inline h-[16px] w-[16px]"
                />
              </span>
            </p>
          </div>
        </div>
      </CardContent>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <SearchInput
            placeholder={"Search by name or email"}
            onSearch={() => {}}
          />
        </div>
        <CustomButton
          variant="primary"
          onClick={() => {
            setShowInviteModal(true);
          }}
        >
          Invite People
        </CustomButton>
      </div>
      <MemberCard
        deleteHandle={() => {
          setShowDeleteModal(true);
        }}
        setRole={() => {}}
        name="Emosivbe Promise"
        email="Promiseejiro43@gmail.com"
        image="https://github.com/shadcn.png"
      />
      <MemberCard
        deleteHandle={() => {
          setShowDeleteModal(true);
        }}
        setRole={() => {}}
        name="Emosivbe Promise"
        email="Promiseejiro43@gmail.com"
        image="https://github.com/shadcn.png"
      />
      <CardContent className="mb-0 px-0 pt-12">
        <div className="flex items-center justify-between space-x-4 rounded-md">
          <div className="max-w-[894px]">
            <p className="text-xl font-medium leading-none">
              Export Members List
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Export a CSV with information of all members of your team
            </p>
          </div>
          <CustomButton variant="primary">Export CSV</CustomButton>
        </div>
      </CardContent>
      <DeleteSuccessModal
        // memberId=""
        show={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
        }}
      />
      <InviteModal
        onClose={() => {
          setShowInviteModal(false);
        }}
        show={showInviteModal}
      />
    </section>
  );
};

export default Member;
