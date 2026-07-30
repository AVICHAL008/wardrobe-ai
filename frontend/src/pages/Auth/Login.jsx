import { Link, useNavigate } from "react-router-dom";
import { Shirt } from "lucide-react";
import { useState } from "react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import useAuth from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    login(email);

    navigate("/dashboard");
  }

  return (
    <Card className="w-full max-w-md">
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-blue-600/20 p-4">
          <Shirt size={40} className="text-blue-400" />
        </div>

        <h1 className="text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Sign in to your Wardrobe AI account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <Button
          type="submit"
          className="w-full"
        >
          Continue
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-400 hover:text-blue-300"
        >
          Create Account
        </Link>
      </p>
    </Card>
  );
}