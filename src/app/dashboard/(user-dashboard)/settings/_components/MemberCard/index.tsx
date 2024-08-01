import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { CardContent } from "~/components/ui/card";
import DeleteDropDown from "../deleteDropDown";
import RoleDropDown from "../roleDropDown";

interface MemberCardProperty {
  name: string;
  email: string;
  image: string;
  deleteHandle: () => void;
  setRole: (role: string) => void;
}

const MemberCard = ({
  name,
  email,
  image,
  deleteHandle,
  setRole,
}: MemberCardProperty) => {
  return (
    <div className="flex items-center justify-between border-b">
      <div>
        <CardContent className="m-0 px-0 py-4">
          <div className="flex items-center space-x-4 rounded-md py-2">
            <Avatar data-testid="avatar" className="h-10 w-10">
              <AvatarImage src={image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
        </CardContent>
      </div>
      <div>
        <RoleDropDown
          onChange={(data: string) => {
            setRole(data);
          }}
        />
      </div>
      <div>
        <DeleteDropDown onDelete={deleteHandle} />
      </div>
    </div>
  );
};

export default MemberCard;
