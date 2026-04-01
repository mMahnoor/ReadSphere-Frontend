import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  Chip,
} from "@material-tailwind/react";
import { BookOpen, CheckCircle2, Clock } from "lucide-react";

export const BookCard = ({
  title,
  author,
  availableCopies,
  totalCopies,
  price,
  status,
  coverColor = "bg-primary",
}) => {
  const getStatusChip = () => {
    switch (status) {
      case "available":
        return (
          <Chip
            icon={<CheckCircle2 className="h-4 w-4 mt-0.5" />}
            value="Available"
            className="rounded-full text-success-foreground"
            color="green"
          />
        );
      case "borrowed":
        return (
          <Chip
            icon={<BookOpen className="h-4 w-4 mt-0.5" />}
            value="Borrowed"
            className="rounded-full bg-warning text-warning-foreground"
          />
        );
      case "reserved":
        return (
          <Chip
            color="yellow"
            className="bg-warning rounded-full text-warning-foreground"
            icon={<Clock className="h-4 w-4 mt-0.5" />}
            value="reserved"
          />
        );
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group m-4">
      <CardHeader
        className="p-0 m-0 rounded-none"
        floated={false}
        shadow={false}
      >
        <div
          className={`h-48 ${coverColor} flex items-center justify-center relative overflow-hidden`}
        >
          <BookOpen className="h-20 w-20 text-white/20 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute top-3 right-3">{getStatusChip()}</div>
        </div>
      </CardHeader>
      <CardBody className="pt-4 pb-3">
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{author}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {availableCopies} of {totalCopies} available
          </span>
          <span className="font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>
      </CardBody>
      <CardFooter className="pt-0 pb-4">
        {status === "available" ? (
          <Button className="w-full bg-indigo-500">Borrow</Button>
        ) : status === "borrowed" ? (
          <Button variant="secondary" className="w-full bg-amber-700">
            Reserve
          </Button>
        ) : (
          <Button variant="outlined" className="w-full" disabled>
            Already Reserved
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
