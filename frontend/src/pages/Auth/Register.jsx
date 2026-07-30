import { Link } from "react-router-dom";
import { Shirt } from "lucide-react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Register() {
  return (
    <Card className="w-full max-w-md">
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-blue-600/20 p-4">
          <Shirt size={40} className="text-blue-400" />
        </div>

        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Join Wardrobe AI and organize your wardrobe.
        </p>
      </div>

      <form className="space-y-5">
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
        />

        <Button className="w-full">
          Create Account
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-400 hover:text-blue-300"
        >
          Login
        </Link>
      </p>
    </Card>
  );
}