import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLoading(true);
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "SOmething went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock interview"
        />
        <Link to="/generate/create">
          <Button
            size="sm"
            className="transition-all duration-200 hover:scale-105"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-32 rounded-lg shadow-sm"
            />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewPin
              key={interview.id}
              interview={interview}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center h-[calc(100vh-20rem)] text-center">
            <img
              src="/assets/svg/not-found.svg"
              className="w-48 h-48 object-contain opacity-90"
              alt="No interviews found"
            />
            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              No Interviews Found
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              Get started by creating your first mock interview session
            </p>
            <Link to="/generate/create" className="mt-6">
              <Button
                size="lg"
                className="transition-all duration-200 hover:scale-105"
              >
                <Plus className="mr-2 h-5 w-5" />
                Create Interview
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
