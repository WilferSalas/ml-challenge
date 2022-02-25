// @packages
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { FC } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export interface Props {
  id: string;
  items: string[];
}

const BreadcrumbsComponent: FC<Props> = ({ id, items }) => {
  const navigate = useNavigate();

  const handleOnClick = (item: string) => {
    navigate({
      pathname: "",
      search: `?${createSearchParams({
        search: item
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toLocaleLowerCase(),
      })}`,
    });
  };

  return (
    <Breadcrumbs id={id} sx={{ py: 2 }}>
      {items?.map((item: string) => (
        <Link
          color="inherit"
          data-testid="breadcrumb-link"
          key={item}
          onClick={() => handleOnClick(item)}
          sx={{ cursor: "pointer" }}
          underline="hover"
        >
          {item}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
