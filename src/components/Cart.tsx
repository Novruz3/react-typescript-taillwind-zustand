import useProducts from "../store/Products"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export const Cart = () => {

    const { products } = useProducts()
    return (
        <div className="overflow-x-auto px-12 py-8">
            <Table hoverable>
                <TableHead>
                    <TableHeadCell>Product name</TableHeadCell>
                    <TableHeadCell>Color</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {products.map((pro) => {
                        return (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {pro.title}
                                </TableCell>
                                <TableCell>Sliver</TableCell>
                                <TableCell>{ pro.category}</TableCell>
                                <TableCell>${ pro.price}</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </div>
    )
}
