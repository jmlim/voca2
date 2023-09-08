import dummy from "./db/data.json";
export default function Day() {
  //dummy.worlds
  const day = 1;
  const wordList = dummy.words.filter((word) => {
    return word.day === day;
  });

  console.log(wordList);

  return (
    <>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
