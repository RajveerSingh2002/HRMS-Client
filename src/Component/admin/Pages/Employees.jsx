import React from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Employees() {
////first empData hold kerega value oor set update kerega value
    let [empData,setEmpData] = useState({}); 
    let handleChange = (e) => {
        let {name,value} = e.target;

        setEmpData ({...empData,[name]:value});

        
    };
    console.log(empData)
    return(
        <>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Employees</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction>
                        <Dialog>
                            <form>
                                <DialogTrigger className="h-10 w-50 border-2 border-blue-600 rounded-2xl">Add Employee</DialogTrigger>
                                    {/* <Button variant="outline">Open</Button>
                                </DialogTrigger> */}
                                <DialogContent className="sm:max-w-sm h-150 scroll-smooth overflow-scroll">
                                <DialogHeader>
                                    <DialogTitle>Employee Form</DialogTitle>
                                        <DialogDescription>
                                            <div>
                                                <label className="font-bold text-black">Emp id: </label>
                                            </div>
                                            <div>
                                                <input type="text" placeholder=" Enter the  Employee ID" className="w-full h-8 border-2 border-gray-800 rounded" name="empId" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Emp Name: </label>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder=" Enter the  Employee Name" className="w-full h-8 border-2 border-gray-800 rounded" name="empName" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Emp Gender: </label>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder=" Enter the  Employee Gender" className="w-full h-8 border-2 border-gray-800 rounded" name="empGender" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Emp Phone: </label>
                                            </div>
                                            <div className="">
                                                <input type="number" placeholder=" Enter the  Employee Phone" className="w-full h-8 border-2 border-gray-800 rounded" name="empPhone" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Emp Address: </label>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder=" Enter the  Employee Address" className="w-full h-8 border-2 border-gray-800 rounded" name="empAddress" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Emp DOB: </label>
                                            </div>
                                            <div className="">
                                                <input type="date" placeholder=" Enter the  Employee DOB" className="w-full h-8 border-2 border-gray-800 rounded" name="empDob" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Joining Date: </label>
                                            </div>
                                            <div className="">
                                                <input type="date" placeholder=" Enter the  Joinging Date" className="w-full h-8 border-2 border-gray-800 rounded" name="empJoingingdate" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Employee Department: </label>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder=" Enter the  Employee Department" className="w-full h-8 border-2 border-gray-800 rounded" name="empDepartment" onChange={handleChange}></input>
                                            </div>
                                            <div className="mt-5">
                                                <label className="font-bold text-black ">Employee Designation: </label>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder=" Enter the  Employee Designation" className="w-full h-8 border-2 border-gray-800 rounded" name="empDesignation" onChange={handleChange}></input>
                                            </div>
                                        </DialogDescription>
                                </DialogHeader>
                                {/* <FieldGroup>
                                    <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                    </Field>
                                    <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte" />
                                    </Field>
                                </FieldGroup> */}
                                    <DialogFooter>
                                        <DialogClose asChild>
                                                <div className="">
                                                    <Button variant="outline">Close</Button>
                                                </div>
                                            </DialogClose>
                                                <div className="">
                                                    <Button type="submit">Submit</Button>
                                                </div>
                                    </DialogFooter>

                                </DialogContent>
                            </form>
                        </Dialog>

                    </CardAction>
                </CardHeader>
                <CardContent>
            <table class="border-collapse border border-gray-400 ...">
                <thead className="bg-blue-300">
                    <tr>
                    <th class="border border-gray-300 ...">Emp Id</th>
                    <th class="border border-gray-300 ...">Emp Name</th>
                    <th class="border border-gray-300 ...">Emp Gender</th>
                    <th class="border border-gray-300 ...">Emp Email</th>
                    <th class="border border-gray-300 ...">Emp DOB</th>
                    <th class="border border-gray-300 ...">Date of Joining</th>
                    <th class="border border-gray-300 ...">Department</th>
                    <th class="border border-gray-300 ...">Designation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 ...">{empData.empId}</td>
                        <td class="border border-gray-300 ...">{empData.empName}</td>
                        <td class="border border-gray-300 ...">{empData.empGender}</td>
                        <td class="border border-gray-300 ...">{empData.empEmail}</td>
                        <td class="border border-gray-300 ...">{empData.empDob}</td>
                        <td class="border border-gray-300 ...">{empData.empJoingingdate}</td>
                        <td class="border border-gray-300 ...">{empData.empDepartment}</td>
                        <td class="border border-gray-300 ...">{empData.empDesignation}</td>

                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    {/* <td class="border border-gray-300 ...">Michigan</td>
                    <td class="border border-gray-300 ...">Detroit</td> */}
                    </tr>
                </tbody>
            </table>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>

            
        </div>
        </>
    );
}
