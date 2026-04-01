import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <Typography
            variant="h1"
            color="white"
            className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
          >
            Welcome to LibraryHub
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Discover, borrow, and explore thousands of books at your fingertips.
          </Typography>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/books">
              <Button size="lg" color="blue" className="text-lg">
                Browse Books
              </Button>
            </a>

            <a href="/profile">
              <Button
                size="lg"
                variant="outlined"
                color="white"
                className="text-lg"
              >
                My Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Typography variant="h2" className="text-center font-bold mb-12">
            Why Choose LibraryHub?
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-6 text-left"
              >
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <Typography variant="h5" className="mb-2">
                  Vast Collection
                </Typography>
                <Typography className="text-gray-600">
                  Access thousands of books across all genres and categories.
                </Typography>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-6 text-left"
              >
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <Typography variant="h5" className="mb-2">
                  Easy Borrowing
                </Typography>
                <Typography className="text-gray-600">
                  Borrow books with a click and track your reading history.
                </Typography>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-6 text-left"
              >
                <Star className="h-12 w-12 text-blue-600 mb-4" />
                <Typography variant="h5" className="mb-2">
                  Smart Reservations
                </Typography>
                <Typography className="text-gray-600">
                  Reserve books easily and get notified when they become
                  available.
                </Typography>
              </CardHeader>
            </Card>

            {/* Card 4 */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader
                floated={false}
                shadow={false}
                className="p-6 text-left"
              >
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <Typography variant="h5" className="mb-2">
                  Community
                </Typography>
                <Typography className="text-gray-600">
                  Join a passionate community of readers and book lovers.
                </Typography>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-3xl mx-auto p-8 shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100">
            <CardBody>
              <Typography variant="h3" className="mb-4">
                Start Your Reading Journey Today
              </Typography>

              <Typography className="text-gray-700 mb-6 text-lg">
                Sign up now and get access to our entire collection. Your next
                favorite book is waiting!
              </Typography>

              <a href="/books">
                <Button size="lg" color="blue" className="text-lg">
                  Explore Library
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
