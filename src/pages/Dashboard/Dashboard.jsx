// src/pages/Dashboard.js
import React, { useState } from "react";
import {
  Heading,
  useColorMode,
  useDisclosure,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import CreateSaleOrderModal from "../../Components/SaleOrderModal/SaleOrderModal";
import SaleOrderTable from "../../Components/SaleOrderTable/SaleOrderTable";
import { initialSaleOrders, products } from "../../data/sampleData";

const Dashboard = ({ logoutUser }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [saleOrders, setSaleOrders] = useState(initialSaleOrders);

  const handleLogout = () => {
    logoutUser();
  };

  const addSaleOrder = (order) => {
    if (order.paid) {
      setCompletedOrders([...completedOrders, order]);
    } else {
      setSaleOrders([...saleOrders, order]);
      // Deduct the quantities from the product stock
      order.items.forEach((item) => {
        const product = products.find((p) =>
          p.sku.some((sku) => sku.id === item.sku_id)
        );
        const sku = product.sku.find((sku) => sku.id === item.sku_id);
        sku.quantity_in_inventory -= item.quantity;
      });
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>
        Create Sale Order
      </Button>
      <Box mb={4}>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Box>
      <CreateSaleOrderModal
        isOpen={isOpen}
        onClose={onClose}
        addSaleOrder={addSaleOrder}
      />
      <Button onClick={handleLogout} colorScheme="red" mt="4">
        Logout
      </Button>
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SaleOrderTable saleOrders={saleOrders} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable saleOrders={completedOrders} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
