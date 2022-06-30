import Parse from 'html-react-parser'
import React, { useEffect, useState, createRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link' 

import styles from './DaftarForm.module.sass'
import Container from '../custom/Container'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Input from '../custom/Input';

import EraiconVect from '/assets/vector/eraicon.svg'
import ArrowForwardVect from '/assets/vector/arrow-forward.svg'

const FormLender = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Perusahaan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Email' model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

const FormPembeliBeras = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Perusahaan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Lengkap' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='No. Handphone' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Jenis Beras' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Kuantitas' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

const FormSupplierSaprotan = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Perusahaan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Email' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Jenis Saprotan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Alamat Perusahaan' model='2' />
            </div>
        </div>
    )
}

const FormPoktan = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Lengkap' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Usia' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='No. Handphone' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Komoditas yang Dihasilkan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Jumlah Petani' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

const FormGapoktan = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Lengkap' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Usia' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='No. Handphone' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Komoditas yang Dihasilkan' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Jumlah Petani' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

const FormTokoTani = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Lengkap' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Usia' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='No. Handphone' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Luas Toko' model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

const FormPetani = () => {
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Nama Lengkap' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Usia' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='No. Handphone' model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder='Komoditas yang Dihasilkan' model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder='Alamat' model='2' />
            </div>
        </div>
    )
}

export default function DaftarForm({ onClose }) {
    const daftarTypes = [
        {
            name: 'Petani',
            form: FormPetani
        },
        {
            name: 'Toko Tani',
            form: FormTokoTani
        },
        {
            name: 'Gapoktan',
            form: FormGapoktan
        },
        {
            name: 'Poktan',
            form: FormPoktan
        },
        {
            name: 'Supplier Saprotan',
            form: FormSupplierSaprotan
        },
        {
            name: 'Pembeli Beras',
            form: FormPembeliBeras
        },
        {
            name: 'Lender',
            form: FormLender
        }
    ]
    const [selectedForm, setSelectedForm] = useState(0)

    return (
        <section id={ styles.Form } className='bg-white align-left'>
            <div className='row no-margin'>
                <div className={ `col-xs ${ styles.form_main }` }>
                    <div>
                        <Typograph tag='h2' size='lg-3'>Solusi Pertanian dalam Genggaman Anda!</Typograph>
                        <Typograph tag='p' size='sm-1' color='natural-50'>Silakan isi formulir di bawah ini untuk bergabung menjadi pembentuk ekosistem pertanian yang kuat.</Typograph>
                        <div className={ styles.selection }>
                            <Typograph tag='h6' size='sm-2' color='natural-50' weight='light'>Pilih salah satu</Typograph>
                            <div>
                                { daftarTypes.map((type, index) => 
                                    <Typograph key={ index } tag='a' href='#' size='md-3' line='40' weight='semibold' color='green-60' onClick={ () => setSelectedForm(index) } className={ (selectedForm == index) ? styles.active : undefined } >{ type.name }</Typograph>
                                ) }
                            </div>
                        </div>
                        <div className={ styles.data_input }>
                            <Typograph tag='h6' size='sm-2' color='natural-50' weight='light'>Isi Formulir</Typograph>
                            <form>
                                { daftarTypes.map((type, index) => 
                                    <div key={ index }>{ (selectedForm == index) && <type.form /> }</div>
                                ) }
                            </form>
                        </div>
                        <div className={ `align-right ${ styles.button }` }>
                            <Button href='#' backgroundColor='green-60' textColor='white'>Kirim&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardVect /></Button>
                        </div>
                    </div>
                </div>
                <div className={ `${ styles.eraicon }` }>
                    <div className='bg-green-60' onClick={ onClose }>
                        <EraiconVect />
                    </div>
                </div>
            </div>
        </section>
    )
}