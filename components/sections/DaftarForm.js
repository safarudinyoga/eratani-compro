import React, { useEffect, useState, createRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link' 

import styles from './DaftarForm.module.sass'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Input from '../custom/Input';

import EraiconVect from '/assets/vector/eraicon.svg'
import ArrowForwardVect from '/assets/vector/arrow-forward.svg'

const FormLender = ({ perusahaan, email, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ email[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPembeliBeras = ({ perusahaan, nama, hp, jenis, kuantitas, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ jenis[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ kuantitas[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormSupplierSaprotan = ({ perusahaan, email, jenis, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ email[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ jenis[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPoktan = ({ nama, usia, hp, hasil, petani, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ petani[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormGapoktan = ({ nama, usia, hp, hasil, petani, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ petani[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormTokoTani = ({ nama, usia, hp, toko, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ toko[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPetani = ({ nama, usia, hp, hasil, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-6'>
                <Input type='text' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

export default function DaftarForm({ onClose }) {
    const daftarTypes = [
        {
            name: 'Petani',
            form: FormPetani,
            placeholder: {
                nama: {
                    id: 'Nama Lengkap',
                    en: 'Nama Lengkap'
                },
                usia: {
                    id: 'Usia',
                    en: 'Usia'
                },
                hp: {
                    id: 'No. Handphone',
                    en: 'No. Handphone'
                },
                hasil: {
                    id: 'Komoditas yang Dihasilkan',
                    en: 'Komoditas yang Dihasilkan'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        },
        {
            name: 'Toko Tani',
            form: FormTokoTani,
            placeholder: {
                nama: {
                    id: 'Nama Lengkap',
                    en: 'Nama Lengkap'
                },
                usia: {
                    id: 'Usia',
                    en: 'Usia'
                },
                hp: {
                    id: 'No. Handphone',
                    en: 'No. Handphone'
                },
                toko: {
                    id: 'Luas Toko',
                    en: 'Luas Toko'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        },
        {
            name: 'Gapoktan',
            form: FormGapoktan,
            placeholder: {
                nama: {
                    id: 'Nama Lengkap',
                    en: 'Nama Lengkap'
                },
                usia: {
                    id: 'Usia',
                    en: 'Usia'
                },
                hp: {
                    id: 'No. Handphone',
                    en: 'No. Handphone'
                },
                hasil: {
                    id: 'Komoditas yang Dihasilkan',
                    en: 'Komoditas yang Dihasilkan'
                },
                petani: {
                    id: 'Jumlah Petani',
                    en: 'Jumlah Petani'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        },
        {
            name: 'Poktan',
            form: FormPoktan,
            placeholder: {
                nama: {
                    id: 'Nama Lengkap',
                    en: 'Nama Lengkap'
                },
                usia: {
                    id: 'Usia',
                    en: 'Usia'
                },
                hp: {
                    id: 'No. Handphone',
                    en: 'No. Handphone'
                },
                hasil: {
                    id: 'Komoditas yang Dihasilkan',
                    en: 'Komoditas yang Dihasilkan'
                },
                petani: {
                    id: 'Jumlah Petani',
                    en: 'Jumlah Petani'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        },
        {
            name: 'Supplier Saprotan',
            form: FormSupplierSaprotan,
            placeholder: {
                perusahaan: {
                    id: 'Nama Perusahaan',
                    en: 'Nama Perusahaan'
                },
                email: {
                    id: 'Email',
                    en: 'Email'
                },
                jenis: {
                    id: 'Jenis Saprotan',
                    en: 'Jenis Saprotan'
                },
                alamat: {
                    id: 'Alamat Perusahaan',
                    en: 'Alamat Perusahaan'
                }
            }
        },
        {
            name: 'Pembeli Beras',
            form: FormPembeliBeras,
            placeholder: {
                perusahaan: {
                    id: 'Nama Perusahaan',
                    en: 'Nama Perusahaan'
                },
                nama: {
                    id: 'Nama Lengkap',
                    en: 'Nama Lengkap'
                },
                hp: {
                    id: 'No. Handphone',
                    en: 'No. Handphone'
                },
                jenis: {
                    id: 'Jenis Beras',
                    en: 'Jenis Beras'
                },
                kuantitas: {
                    id: 'Kuantitas',
                    en: 'Kuantitas'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        },
        {
            name: 'Lender',
            form: FormLender,
            placeholder: {
                perusahaan: {
                    id: 'Nama Perusahaan',
                    en: 'Nama Perusahaan'
                },
                email: {
                    id: 'Email',
                    en: 'Email'
                },
                alamat: {
                    id: 'Alamat',
                    en: 'Alamat'
                }
            }
        }
    ]
    const [selectedForm, setSelectedForm] = useState(-1)

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
                            { selectedForm > -1 && <Typograph tag='h6' size='sm-2' color='natural-50' weight='light'>Isi Formulir</Typograph> }
                            <form>
                                { daftarTypes.map((type, index) => 
                                    <div key={ index }>{ (selectedForm == index) && <type.form { ...type.placeholder } /> }</div>
                                ) }
                            </form>
                        </div>
                        <div className={ `align-right ${ styles.button }` }>
                            { selectedForm > -1 && <Button href='#' backgroundColor='green-60' textColor='white'>Kirim&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardVect /></Button> }
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