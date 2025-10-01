import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How Our AI-Powered Interview Prep App Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform is designed to be simple and intuitive. Here's how it works:
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <p className="text-lg font-bold">1</p>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Create Your Interview</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Start by creating a new interview. You can specify the job title, industry, and skills you want to practice. Our AI will then generate a set of relevant interview questions for you.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <p className="text-lg font-bold">2</p>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Record Your Answers</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Once you have your questions, you can start practicing. Record your answers to each question using your webcam and microphone. Our platform will capture your video and audio for analysis.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <p className="text-lg font-bold">3</p>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Get Instant Feedback</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                After you have finished recording your answers, our AI will analyze your performance. You will receive a detailed feedback report with insights on your communication skills, body language, and the content of your answers.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <p className="text-lg font-bold">4</p>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Track Your Progress</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our platform allows you to track your progress over time. You can see how you are improving and identify areas where you need to focus your efforts. Our detailed analytics will help you to stay motivated and on track to achieve your career goals.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
