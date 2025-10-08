import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl bg-amber-400 p-3 rounded-md mb-8 text-center">
          Card Component Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Welcome Card"
            content="This is a simple and clean card component that's easy to use and customize."
            buttonText="Learn More"
          />

          <Card
            title="Product Card"
            content="Perfect for showcasing products, features, or any content you want to highlight."
            buttonText="Buy Now"
          />

          <Card
            title="Info Card"
            content="The card component is now reusable and accepts props for title, content, and button text."
            buttonText="Get Started"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
