import React from "react";
import Swal from "sweetalert";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as MuiLab from "@mui/lab";

export const TablePagination = (props: ITablePagination.Props) => {
  const {
    pageCount,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels,
    rowsPerPageOptions = [20, 40],
    showGoToTop = false,
    disableRowPerPage = false,
    disablePagination = false,
  } = props;
  const [pageNo, setPageNo] = React.useState("");

  const defaultTextLabels = {
    next: "Next Page",
    previous: "Previous Page",
    rowsPerPage: "Rows per page:",
    displayRows: "of",
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown> | null,
    value: number
  ) => {
    if (value > 0 && value <= pageCount) {
      changePage(value);
    } else {
      Swal({
        title: "Invalid Page Number",
        text: "Please enter a valid page number",
        icon: "error",
      });
    }
    setPageNo("");
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const enableGoBtn = +pageNo <= pageCount && +pageNo > 0;

  const CustomizedPaginationItem = Mui.styled(MuiLab.PaginationItem)({
    selected: {
      backgroundColor: "#ECF3FD !important",
      border: "1px solid #2A67B1",
      fontWeight: 600,
    },
    icon: {
      color: "#2A67B1",
    },
  });

  return (
    <Mui.TableFooter>
      <Mui.TableRow>
        <Mui.TableCell
          style={{ display: pageCount < 0 ? "none" : "table-cell" }}
        >
          <div>
            <Mui.Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              disabled={disablePagination}
              renderItem={(item) => (
                <CustomizedPaginationItem
                  {...item}
                  shape={
                    item.type === "previous" || item.type === "next"
                      ? "circular"
                      : "rounded"
                  }
                  variant={
                    item.type === "previous" ||
                    item.type === "next" ||
                    item.selected
                      ? "outlined"
                      : "text"
                  }
                />
              )}
            />
            {showGoToTop ? (
              <div onClick={handleScrollToTop}>
                <span>Go to Top</span>
                <div>
                  <MuiIcons.ArrowUpward />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div>
            <span>Enter Page no.</span>
            <div>
              <input
                value={pageNo}
                type="number"
                onChange={(event) => setPageNo(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handlePageChange(null, +pageNo);
                  }
                }}
                placeholder="e.g 10"
                min="0"
              />
              <div
                style={{ pointerEvents: !enableGoBtn ? "none" : "all" }}
                onClick={() => handlePageChange(null, +pageNo)}
              >
                <MuiIcons.ChevronRight />
              </div>
            </div>
            {!disableRowPerPage && (
              <div style={{ marginLeft: "10px" }}>
                <div>
                  {textLabels?.rowsPerPage || defaultTextLabels.rowsPerPage}
                </div>
                <Mui.FormControl
                  variant="outlined"
                  size="small"
                  style={{ minWidth: "100px", marginLeft: "5px" }}
                >
                  <Mui.Select
                    value={rowsPerPage}
                    onChange={(event) =>
                      changeRowsPerPage(event.target.value as number)
                    }
                  >
                    {rowsPerPageOptions.map((item, index) => (
                      <Mui.MenuItem value={item} key={index}>
                        {item}
                      </Mui.MenuItem>
                    ))}
                  </Mui.Select>
                </Mui.FormControl>
              </div>
            )}
          </div>
        </Mui.TableCell>
      </Mui.TableRow>
    </Mui.TableFooter>
  );
};

export namespace ITablePagination {
  export interface Props {
    pageCount: number;
    page: number;
    rowsPerPage: number;
    changeRowsPerPage: (rowsPerPage: number) => void;
    changePage: (page: number) => void;
    textLabels?: {
      next: string;
      previous: string;
      rowsPerPage: string;
      displayRows: string;
    };
    rowsPerPageOptions?: number[];
    showGoToTop?: boolean;
    disableRowPerPage?: boolean;
    disablePagination?: boolean;
  }
}
