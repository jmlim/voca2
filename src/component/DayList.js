import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }
  function onClick2() {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }

  // 어떤 상태값이 바뀌었을 때 동작하는 이벤트
  // 렌더링 결과가 dom 에 반영된 직후
  useEffect(() => {
    // 이렇게 하면 json으로 변환 후 promise 를 리턴한다.
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);
  // 2번째 인자는 의존성 배열이라고 함.
  // 특정 변수가 변경 되었을 시 호출하려면 의존성 배열에 상태변수를 넣음
  // 처음 한번만 실행하려면 빈 배열을 줌.

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day Change</button>
    </>
  );
}
