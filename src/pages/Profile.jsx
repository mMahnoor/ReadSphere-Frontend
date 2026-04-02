import { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Avatar,
  Input,
  Button,
} from "@material-tailwind/react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Calendar1,
  BadgeIcon,
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "2023-01-15",
    phone: "+1 234 567 8900",
  });

  const stats = [
    {
      label: "Books Borrowed",
      value: "24",
      icon: BookOpen,
      color: "text-primary",
    },
    {
      label: "Currently Reading",
      value: "2",
      icon: Clock,
      color: "text-warning",
    },
    {
      label: "Books Completed",
      value: "22",
      icon: CheckCircle2,
      color: "text-success",
    },
    {
      label: "Active Reservations",
      value: "3",
      icon: Calendar,
      color: "text-secondary",
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4 p-4">
          {/* Profile Header */}
          <Card className="col-span-1 overflow-hidden">
            <CardBody className="pt-6">
              <div className="flex flex-col items-center gap-3">
                <Avatar
                  className="h-24 w-24"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="Me"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-foreground mb-1 text-center">
                    {userData.name}
                  </h2>
                  <span className="flex flex-row items-center justify-center gap-1 bg-indigo-600 text-white text-sm px-0 py-1 rounded-full">
                    <BadgeIcon className="w-4 h-4" />
                    Gold Member
                  </span>
                  <p className="text-muted-foreground mb-4">{userData.email}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Member since {userData.memberSince}
                    </span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <div class="col-span-2 flex flex-col gap-4">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="overflow-hidden">
                  <CardBody className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {stat.value}
                        </p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Profile Details */}
            <Card className="overflow-hidden">
              <CardHeader className="rounded-none m-0 p-6 shadow-none">
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="h4">Profile Information</Typography>
                    <Typography variant="paragraph">
                      Update your personal details
                    </Typography>
                  </div>
                  {!isEditing && (
                    <Button onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="memberSince">Member Since</Label>
                      <Input
                        id="memberSince"
                        value={userData.memberSince}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <>
                    <Separator className="my-6" />
                    <div className="flex gap-4 justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleSave}>Save Changes</Button>
                    </div>
                  </>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
