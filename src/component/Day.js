import { useEffect, useState } from "react";
import Word from "./Word";
import { useParams } from "react-router-dom";

export default function Day() {
  const { day } = useParams();
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((words) => {
        setWords(words);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}
