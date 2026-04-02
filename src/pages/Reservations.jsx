import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { BookOpen, Calendar, Clock, User } from "lucide-react";

const mockReservations = [
  {
    id: 1,
    bookTitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    reservedDate: "2024-01-20",
    estimatedAvailability: "2024-02-05",
    position: 2,
    status: "waiting",
  },
  {
    id: 2,
    bookTitle: "Pride and Prejudice",
    author: "Jane Austen",
    reservedDate: "2024-01-18",
    estimatedAvailability: "2024-01-28",
    position: 1,
    status: "waiting",
  },
  {
    id: 3,
    bookTitle: "The Hobbit",
    author: "J.R.R. Tolkien",
    reservedDate: "2024-01-22",
    estimatedAvailability: "2024-02-10",
    position: 3,
    status: "waiting",
  },
];

const Reservations = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            My Reservations
          </h1>
          <p className="text-muted-foreground">
            Books you've reserved will appear here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReservations.map((reservation) => (
            <Card
              key={reservation.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border"
            >
              <CardHeader className="p-6 m-0 rounded-none shadow-none">
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <Chip
                    className="bg-warning text-warning-foreground rounded-full"
                    icon={<Clock className="h-4 w-4 mt-0.5" />}
                    value={"Position #" + reservation.position}
                  />
                </div>
                <Typography className="text-xl font-bold">
                  {reservation.bookTitle}
                </Typography>
                <p className="text-sm text-muted-foreground">
                  {reservation.author}
                </p>
              </CardHeader>
              <CardBody className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Reserved on:</span>
                  <span className="font-medium">
                    {reservation.reservedDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Est. available:</span>
                  <span className="font-medium text-success">
                    {reservation.estimatedAvailability}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {reservation.position === 1
                      ? "Next in line!"
                      : `${reservation.position - 1} ${
                          reservation.position - 1 === 1 ? "person" : "people"
                        } ahead`}
                  </span>
                </div>
              </CardBody>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Cancel Reservation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {mockReservations.length === 0 && (
          <Card className="text-center py-12">
            <CardBody>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                You don't have any active reservations.
              </p>
              <Button className="mt-4">Browse Books</Button>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Reservations;
