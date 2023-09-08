import Word from "./Word";
import dummy from "./db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  //dummy.worlds
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => {
    return word.day === Number(day);
  });
  console.log(day);
  console.log(wordList);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}
