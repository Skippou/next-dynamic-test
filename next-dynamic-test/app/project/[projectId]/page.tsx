"use client";
import { useParams } from "next/navigation";
interface PageProps {
  params: { projectId: string };
}
export default function Page({ params }: PageProps) {
    const useThisParam = useParams<{ projectId: string }>();
  return <p className="text-white bg-black">Testing @ {useThisParam?.projectId } </p>;
}