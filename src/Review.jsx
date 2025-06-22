import { useState } from "react";
import people from "./data";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber++;
    }
    return setIndex(checkNumber(randomNumber));
  };
  return (
    <article className='bg-white py-10 px-15 flex flex-col items-center justify-between gap-2 max-w-md '>
      <div className='relative'>
        <div className='w-32 h-32 bg-blue-500 rounded-full '></div>
        <img
          className='w-32 h-32 object-cover rounded-full shadow-md absolute top-0.5 right-1.5'
          src={image}
          alt={name}
        />
        <span>
          <FaQuoteLeft className='absolute top-0 text-2xl text-blue-400' />
        </span>
      </div>
      <h2 className='text-2xl font-bold capitalize'>{name}</h2>
      <p>{job}</p>
      <p className='text-center leading-tight'>{text}</p>
      <div
        className='flex justify-between items-center gap-10 text-2xl
      '
      >
        <button onClick={prevPerson}>
          <FaAngleLeft />
        </button>
        <button onClick={nextPerson}>
          <FaAngleRight />
        </button>
      </div>
      <button
        onClick={randomReview}
        className='bg-emerald-400 hover:bg-emerald-600 px-4 py-1'
      >
        Surpise Me
      </button>
    </article>
  );
};

export default Review;
