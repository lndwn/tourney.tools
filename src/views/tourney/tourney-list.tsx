import { Link } from "react-router-dom";
import { Column, Row } from "../../components/layout";
import { UIText } from "../../components/text";

export const TourneyListView = () => {
  return (
    <Column>
      <Row gap="2">
        <UIText>Tourney List</UIText>
        <Link to="create">
          <UIText>Create</UIText>
        </Link>
      </Row>
    </Column>
  );
};
