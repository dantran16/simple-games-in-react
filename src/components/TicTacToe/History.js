import { useState } from "react";
import { List, ListItem, Button } from "@chakra-ui/react";

const History = ({ history, jumpTo }) => {
  const [toggle, setToggle] = useState(false)
  const turns = history.map((step, turn) => {
    const desc = turn ?
      'Go to move #' + turn :
      'Go to game start';
    return (
      <ListItem fontWeight={turn === history.length - 1 ? 700 : 400} key={turn}>
        <Button mr={3} onClick={() => jumpTo(turn + 1)}>{desc}</Button>
        { step.move.row && step.move.row ? `${step.move.type} (${step.move.row},${step.move.col})` : ""}
      </ListItem>
    );
  });
  if (toggle) {
    turns.reverse()
  }
  return (
    <List mt={3} spacing={3}>
      <Button colorScheme='green' onClick={() => setToggle((prev) => !prev)}>Sort History {toggle ? '(Desc)' : '(Asc)'}</Button>
      {turns}
    </List>
  )
}

export default History;