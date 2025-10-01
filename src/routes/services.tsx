import { FC } from "react";

const Services: FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our AI-Powered Interview Preparation Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a range of services to help you prepare for your next interview. Our AI-powered platform provides you with the tools and resources you need to succeed.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI-Powered Mock Interviews</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our AI-powered mock interviews are designed to simulate a real interview experience. You can practice your answers to common interview questions and get instant feedback on your performance. Our AI will analyze your answers, body language, and communication skills to provide you with a detailed report of your strengths and weaknesses.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9m9-9a9 9 0 019 9m-9 9a9 9 0 01-9-9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Personalized Feedback</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                After each mock interview, you will receive a personalized feedback report. Our AI will provide you with actionable insights to help you improve your interview skills. You will be able to identify your strengths and weaknesses and get a better understanding of how to present yourself in the best possible light.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customized Interview Questions</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our platform allows you to customize your interview questions to match the specific job you are applying for. You can choose from a wide range of topics and difficulty levels to create a practice session that is tailored to your needs. This will help you to prepare for the exact questions you are likely to be asked in your real interview.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9m9-9a9 9 0 019 9m-9 9a9 9 0 01-9-9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Track Your Progress</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our platform allows you to track your progress over time. You can see how you are improving and identify areas where you need to focus your efforts. Our detailed analytics will help you to stay motivated and on track to achieve your career goals.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;