import React from 'react'
import { useFormik } from 'formik';

function Incomereport() {

    const formik = useFormik({
        initialValues: {
            name: '',
            Income: "",
            expense: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6' >
                            <label >NAME</label>
                            <input className='form-control'
                                id=""
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>
                        <div className='col-lg-6' >
                            <label >Income</label>
                            <input className='form-control'
                                id=""
                                name="Income"
                                type="Number"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>

                        <div className='col-lg-6' >
                            <label >Expense</label>
                            <input className='form-control'
                                id=""
                                name="expense"
                                type="Number"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>
                        <div className='col-lg-3 mt-4'>
                        <input classname=" btn btn-primary" type="submit"/>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Incomereport
