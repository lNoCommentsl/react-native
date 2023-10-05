import React, {useState, useEffect} from 'react';

import Layout from '../components/ui/Layout';
import {TransactionForm} from "../components/TransactionForm";



const ModalScreen = () => {

        return (
            <Layout>
                <TransactionForm />
            </Layout>
        );
    }
;


export {ModalScreen};
