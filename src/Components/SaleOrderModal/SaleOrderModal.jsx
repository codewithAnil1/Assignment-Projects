import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
  Text,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Select } from "chakra-react-select";
import { customers, products } from "../../data/sampleData";

const CreateSaleOrderModal = ({ isOpen, onClose, addSaleOrder }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customer_id: "",
      items: [],
      paid: false,
      invoice_no: "",
      invoice_date: "",
      totalPrice: 0, // Added totalPrice to initialValues
    },
    onSubmit: (values) => {
      // Validate stock quantities
      const errors = {};
      values.items.forEach((item) => {
        const product = products.find((p) =>
          p.sku.some((sku) => sku.id === item.sku_id)
        );
        const sku = product.sku.find((sku) => sku.id === item.sku_id);
        if (item.quantity > sku.quantity_in_inventory) {
          errors[
            item.sku_id
          ] = `Only ${sku.quantity_in_inventory} items available for ${product.name}`;
        }
      });
      if (Object.keys(errors).length > 0) {
        formik.setErrors(errors);
      } else {
        // Include customerName in the values being submitted
        const newValues = { ...values, customerName: values.customerName };
        addSaleOrder(newValues);
        onClose();
      }
    },
  });

  const handleProductChange = (selectedOptions) => {
    const selectedProductIds = selectedOptions.map((option) => option.value);
    setSelectedProducts(selectedProductIds);

    const newItems = selectedProductIds.flatMap((productId) => {
      const product = products.find((p) => p.id === productId);
      return product.sku.map((sku) => ({
        sku_id: sku.id,
        price: sku.selling_price,
        quantity: 1,
      }));
    });

    formik.setFieldValue("items", newItems);
  };

  const handleQuantityChange = (skuId, value) => {
    const items = formik.values.items.map((item) =>
      item.sku_id === skuId ? { ...item, quantity: value } : item
    );
    formik.setFieldValue("items", items);
  };

  const handlePriceChange = (skuId, value) => {
    const items = formik.values.items.map((item) =>
      item.sku_id === skuId ? { ...item, price: value } : item
    );
    formik.setFieldValue("items", items);
  };

  // Calculate total price whenever items change
  useEffect(() => {
    const totalPrice = formik.values.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    formik.setFieldValue("totalPrice", totalPrice);
  }, [formik.values.items]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormControl id="customerName" isRequired>
              <FormLabel>Customer Name</FormLabel>
              <Input
                name="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl id="invoice_no" isRequired>
              <FormLabel>Invoice Number</FormLabel>
              <Input
                name="invoice_no"
                value={formik.values.invoice_no}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl id="invoice_date" isRequired>
              <FormLabel>Invoice Date</FormLabel>
              <Input
                type="date"
                name="invoice_date"
                value={formik.values.invoice_date}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl id="products">
              <FormLabel>Products</FormLabel>
              <Select
                isMulti
                name="products"
                options={products.map((product) => ({
                  value: product.id,
                  label: product.name,
                }))}
                placeholder="Select products..."
                closeMenuOnSelect={false}
                onChange={handleProductChange}
              />
            </FormControl>

            {selectedProducts.map((productId) => {
              const product = products.find((p) => p.id === productId);
              return (
                <Box
                  key={product.id}
                  mt={4}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <Text>{product.name}</Text>
                  {product.sku.map((sku) => (
                    <Box key={sku.id} mt={4}>
                      <Text>
                        SKU: {sku.name} (Stock: {sku.quantity_in_inventory})
                      </Text>
                      <FormControl id={`quantity-${sku.id}`}>
                        <FormLabel>Quantity</FormLabel>
                        <NumberInput
                          min={1}
                          value={
                            formik.values.items.find(
                              (item) => item.sku_id === sku.id
                            )?.quantity || 1
                          }
                          onChange={(valueString) =>
                            handleQuantityChange(
                              sku.id,
                              parseInt(valueString, 10)
                            )
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>

                      <FormControl id={`price-${sku.id}`}>
                        <FormLabel>Selling Rate</FormLabel>
                        <NumberInput
                          min={0}
                          value={
                            formik.values.items.find(
                              (item) => item.sku_id === sku.id
                            )?.price || sku.selling_price
                          }
                          onChange={(valueString) =>
                            handlePriceChange(sku.id, parseFloat(valueString))
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>

                      {formik.errors[sku.id] && (
                        <Text color="red.500">{formik.errors[sku.id]}</Text>
                      )}
                    </Box>
                  ))}
                </Box>
              );
            })}

            <FormControl id="paid" mt={4}>
              <Checkbox
                name="paid"
                isChecked={formik.values.paid}
                onChange={formik.handleChange}
              >
                Is Paid?
              </Checkbox>
            </FormControl>

            {/* Display total price */}
            <Box mt={4}>
              <Text fontWeight="bold">
                Total Price: ${formik.values.totalPrice.toFixed(2)}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateSaleOrderModal;
