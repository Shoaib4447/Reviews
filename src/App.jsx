import Review from "./Review";
const App = () => {
  return (
    <>
      <main className='bg-blue-300 min-h-screen flex flex-col justify-center flex-wrap items-center gap-6'>
        <h2 className='text-6xl font-bold underline text-blue-400'>
          Our Reviews
        </h2>
        <Review />
      </main>
    </>
  );
};

export default App;
