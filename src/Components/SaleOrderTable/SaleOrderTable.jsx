// src/components/SaleOrderTable.js
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

const SaleOrderTable = ({ saleOrders }) => {
  const toast = useToast();

  const handleEdit = (orderId) => {
    toast({
      title: "Edit not implemented.",
      description: "Edit functionality is not implemented yet.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleView = (orderId) => {
    toast({
      title: "View not implemented.",
      description: "View functionality is not implemented yet.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>

            <Th>Total Price</Th>
            <Th>Invoice No</Th>
            <Th>Last Modified Date</Th>

            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {saleOrders.map((order, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.totalPrice}</Td>

              <Td>{order.invoice_no}</Td>
              <Td>{order.invoice_date}</Td>

              <Td>
                <Button size="sm" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button size="sm" ml={2} onClick={() => handleView(index)}>
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SaleOrderTable;
