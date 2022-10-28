import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Table from './common/table.component';
import Permissions from './permissions.component';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CreateUser (props) { 
    const [users, setUsers] = useState([]);
    const [searchedText, setSearchedText] = useState("");

    const columns = [ 
        { label: "ID", path: "id", content: (item, path) => <> {item[path]} </> }, 
        { label: "Permission Name", path: "permissionName", content: (item, path) => <> {item[path]} </> }, 
        { label: "Description", path: "description", content: (item, path) => <> {item[path]} </> },
        { label: "Created By", path: "company.name", content: (item, path) => <> {item[path]} </> },
        { label: "Updated By", path: 'address.zipcode', content: (item, path) => <> {item[path]} </> },
    ];

    function filterUsers () {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchedText.toLowerCase()) || user.email.toLowerCase().includes(searchedText.toLowerCase()));
        return filteredUsers;
    }

    useEffect(() => {
        async function getUsers () {
            console.log("Ashsi");
            try {
                const { data } = await axios.get("https:");

                // setUsers(data);
            }
            catch(err) {
                console.log(err);
                const { data } = getValues();
                console.log("-------------------",data);
                setUsers(data);
                // alert("Error Happened In Fetching Data");
            }   
        }
        getUsers();
    }, []);

    const filteredUsers = filterUsers();

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function getValues (values) {
        console.log("abar create user e ashsi");
        console.log(values);
    }

    return (
        <div className='row'>
            <div className='col-lg-12 mb-2'>
                <div className='row'>
                <div className='col-lg-3'>
                <input onChange={(event) => setSearchedText(event.target.value)} />

                </div>
                <div className='col-lg-3 text-end ms-auto'>
                <button className='btn btn-primary' onClick={openModal}>Create New Permission</button>
                </div>
                </div>
            </div>
                
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='row'>
                       <div className='col-lg-8'><h3 >Create permission</h3></div>
                       
                            <div className='col-lg-4 text-end'><button className='btn btn-danger' onClick={closeModal}>Close</button></div>
                      
                    </div>
                    <div className='col-lg-12'>
                        <Permissions 
                            closeModal={closeModal} 
                            getValues={getValues}
                        />
                    </div>
                </Modal>
            <Table 
                items={filteredUsers}
                columns={columns}
            />
        </div>
    );
}
 
export default CreateUser;