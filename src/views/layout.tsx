import { Link, NavLink, Outlet } from "react-router-dom";
import { Column, Row } from "../components/layout";
import { useBreadcrumbs } from "../utils/use-breadcrumbs";
import { UIText } from "../components/text";

export const AppLayout = () => {
  const breadcrumbs = useBreadcrumbs();
  const [current, previous] = [...breadcrumbs].reverse();
  return (
    <Column>
      <Row gap="2">
        {previous && <Link to={previous.to}>Back</Link>}
        <UIText>{current?.label ?? "tourney.tools"}</UIText>
      </Row>
      <Row>
        {breadcrumbs.map((crumb) => (
          <NavLink key={crumb.to} to={crumb.to}>
            <UIText>{crumb.label}</UIText>
          </NavLink>
        ))}
      </Row>
      <Outlet />
    </Column>
  );
};
