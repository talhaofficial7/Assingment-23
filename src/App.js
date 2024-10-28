import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "lib/routes";
import ErrorBoundary from './components/ErrorBoundary'; // Sahi path

export default function App() {
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ChakraProvider>
  );
}
