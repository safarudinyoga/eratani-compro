import React, { useEffect, useState, createRef } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

import styles from './Join.module.sass'
import Typograph from '/components/custom/Typograph'
import Button from '/components/custom/Button'
import Input from '/components/custom/Input';

import EraiconVect from '/assets/vector/eraicon.svg'
import Eraicon2Vect from '/assets/vector/eraicon-2.svg'
import ArrowForwardVect from '/assets/vector/arrow-forward.svg'

const FormLender = ({ perusahaan, email, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='lender_perusahaan' name='lender_perusahaan' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='lender_email' name='lender_email' placeholder={ email[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' id='lender_alamat' name='lender_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPembeliBeras = ({ perusahaan, nama, hp, jenis, kuantitas, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_perusahaan' name='pembeli_perusahaan' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_nama' name='pembeli_nama' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_hp' name='pembeli_hp' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_jenis' name='pembeli_jenis' placeholder={ jenis[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_kuantitas' name='pembeli_kuantitas' unit='Kg' placeholder={ kuantitas[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='pembeli_alamat' name='pembeli_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormSupplierSaprotan = ({ perusahaan, email, jenis, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='supplier_perusahaan' name='supplier_perusahaan' placeholder={ perusahaan[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='supplier_email' name='supplier_email' placeholder={ email[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='supplier_jenis' name='supplier_jenis' placeholder={ jenis[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='supplier_alamat' name='supplier_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPoktan = ({ nama, usia, hp, hasil, petani, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_nama' name='poktan_nama' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_usia' name='poktan_usia' unit='Tahun' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_hp' name='poktan_hp' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_hasil' name='poktan_hasil' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_petani' name='poktan_petani' unit='Orang' placeholder={ petani[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='poktan_alamat' name='poktan_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormGapoktan = ({ nama, usia, hp, hasil, petani, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_nama' name='gapoktan_nama' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_usia' name='gapoktan_usia' unit='Tahun' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_hp' name='gapoktan_hp' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_hasil' name='gapoktan_hasil' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_petani' name='gapoktan_petani' unit='Orang' placeholder={ petani[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='gapoktan_alamat' name='gapoktan_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormTokoTani = ({ nama, usia, hp, toko, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='tokotani_nama' name='tokotani_nama' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='tokotani_usia' name='tokotani_usia' unit='Tahun' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='tokotani_hp' name='tokotani_hp' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='tokotani_toko' name='tokotani_toko' unit='m<sup>2</sup>' placeholder={ toko[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' id='tokotani_alamat' name='tokotani_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

const FormPetani = ({ nama, usia, hp, hasil, alamat }) => {
    const { locale } = useRouter()
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='petani_nama' name='petani_nama' placeholder={ nama[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='petani_usia' name='petani_usia' unit='Tahun' placeholder={ usia[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='petani_hp' name='petani_hp' placeholder={ hp[locale] } model='2' />
            </div>
            <div className='col-xs-12 col-md-6'>
                <Input type='text' id='petani_hasil' name='petani_hasil' placeholder={ hasil[locale] } model='2' />
            </div>
            <div className='col-xs-12'>
                <Input type='text' id='petani_alamat' name='petani_alamat' placeholder={ alamat[locale] } model='2' />
            </div>
        </div>
    )
}

export default function DaftarForm() {
    
    const { query, locale } = useRouter()
    const type = (Array.isArray(query.type)) ? query.type[0] : null

    const daftarTypes = [
        {
            slugName: 'petani',
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
            slugName: 'toko-tani',
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
            slugName: 'gapoktan',
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
            slugName: 'poktan',
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
            slugName: 'supplier',
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
            slugName: 'pembeli',
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
            slugName: 'lender',
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

    let selectedForm = -1
    if (type !== null)
        selectedForm = daftarTypes.findIndex((t) => type.toLowerCase() === t.slugName.toLowerCase())

    const pageTitle = {
        id: `Gabung`,
        en: 'Join'   
    }

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>
            <section id={ styles.Form } className='bg-white align-left'>
                <div className='row no-margin'>
                    <div className={ `col-xs ${ styles.form_main }` }>
                        <div>
                            <div className={ `align-center ${ styles.eraicon_mobile }` }>
                                <Eraicon2Vect />
                            </div>
                            <Typograph tag='h2' size='sm-1 md-2-sm lg-3-md'>Solusi Pertanian dalam Genggaman Anda!</Typograph>
                            <Typograph tag='p' size='xsm-1 sm-2-sm sm-1-md' color='natural-50'>Silakan isi formulir di bawah ini untuk bergabung menjadi pembentuk ekosistem pertanian yang kuat.</Typograph>
                            <div className={ styles.selection }>
                                <Typograph tag='h6' size='xsm-1 sm-2-md' color='natural-50' weight='light'>Pilih salah satu</Typograph>
                                <div>
                                    { daftarTypes.map((type, index) => 
                                        <Typograph key={ index } tag='a' href={ `/join/${ type.slugName }` } replace size='sm-2 md-3-md' weight='semibold' color='green-60' className={ (selectedForm == index) ? styles.active : undefined } >{ type.name }</Typograph>
                                    ) }
                                </div>
                            </div>
                            
                            <div className={ styles.data_input }>
                                { selectedForm > -1 && <Typograph tag='h6' size='xsm-1 sm-2-md' color='natural-50' weight='light'>Isi Formulir</Typograph> }
                                <form>
                                    { daftarTypes.map((type, index) => 
                                        <div key={ index }>{ (selectedForm == index) && <type.form { ...type.placeholder } /> }</div>
                                    ) }
                                </form>
                            </div>
                            <div className={ `align-right ${ styles.button }` }>
                                { selectedForm > -1 && <Button href='#' backgroundColor='green-60' textColor='white'>Kirim&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardVect width='16' /></Button> }
                            </div>
                        </div>
                    </div>
                    <div className={ `${ styles.eraicon }` }>
                        <div className='bg-green-60'>
                            <EraiconVect />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}