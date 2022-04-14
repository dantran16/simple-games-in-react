import { List, ListItem, Button } from "@chakra-ui/react";

const History = ({history, jumpTo}) => {
  const turns = history.map((step, turn) => {
    const desc = turn ?
      'Go to move #' + turn :
      'Go to game start';
    return (
      <ListItem key={turn}>
        <Button onClick={() => jumpTo(turn + 1)}>{desc}</Button>
      </ListItem>
    );
  });
  return (
    <List mt={3} spacing={3}>
      {turns}
    </List>
  )
}

export default History;