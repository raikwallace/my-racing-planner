import { Table, VisuallyHidden } from "@chakra-ui/react";
import InfinityTable from "../table/infinity-table";

type Dict<T = any> = Record<string, T>;
function HistoryTable<T extends string | number | Dict | undefined>({
  list,
  rows,
}: {
  list: T[] | readonly T[] | undefined;
  rows: (item: Exclude<T, undefined>, index: number) => React.ReactNode;
}) {
  return (
    <InfinityTable list={list} rows={rows} cols={7}>
      <Table.Row bgColor={"bg.muted"}>
        <Table.ColumnHeader minWidth={"40px"} textAlign={"center"}>
          <VisuallyHidden>Owned Content Checkbox</VisuallyHidden>
        </Table.ColumnHeader>
        <Table.ColumnHeader minWidth={"60px"} textAlign={"center"}>
          <VisuallyHidden>Content Logo</VisuallyHidden>
        </Table.ColumnHeader>
        <Table.ColumnHeader width={"100%"}>Name</Table.ColumnHeader>
        <Table.ColumnHeader minWidth={"90px"} textAlign={"center"}>
          Category
        </Table.ColumnHeader>
        <Table.ColumnHeader minWidth={"90px"} textAlign={"center"}>
          Released
        </Table.ColumnHeader>
        <Table.ColumnHeader minWidth={"90px"} textAlign={"center"}>
          Usage/Year
        </Table.ColumnHeader>
        <Table.ColumnHeader minWidth={"90px"} textAlign={"center"}>
          Used
        </Table.ColumnHeader>
      </Table.Row>
    </InfinityTable>
  );
}

export default HistoryTable;
