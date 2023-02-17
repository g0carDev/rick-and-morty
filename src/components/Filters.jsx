import React, { useState } from 'react'

import ListSubheader from '@mui/material/ListSubheader'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import { setSearchIn, setSearchBy, setGender, setStatus, clearFilters } from '../redux/filters/filtersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ItemFilter } from './ItemFilter'

export const Filters = () => {
    const [showFilter, setShowFilter] = useState(false)

    const { searchIn, searchBy, status, gender } = useSelector((state) => state.filters)

    const dispatch = useDispatch()

    const onClearFilters = () => {
        setShowFilter(false)
        dispatch(clearFilters())
    }

    return (
        <>
            <ListSubheader>Filters</ListSubheader>
            <ItemFilter
                formLabel='Search In'
                formValue={searchIn}
                onChange={(e) => dispatch(setSearchIn(e.target.value))}
                radios={[
                    { value: 'character', label: 'Character' },
                    { value: 'episode', label: 'Episode' },
                ]}
            />
            <Divider />
            <Button
                sx={{
                    width: '100%',
                    borderRadius: 0,
                }}
                startIcon={
                    showFilter ? <FilterAltIcon /> : <FilterAltOffIcon />
                } onClick={() => setShowFilter(!showFilter)}>
                {showFilter ? 'Hide Filters' : 'Show Filters'}
            </Button>
            {
                showFilter && (
                    <>
                        {
                            searchIn === 'character'
                                ? (<>
                                    <ItemFilter
                                        formLabel='Search By'
                                        formValue={searchBy}
                                        onChange={(e) => dispatch(setSearchBy(e.target.value))}
                                        radios={[
                                            { value: 'name', label: 'Name' },
                                            { value: 'type', label: 'Type' },
                                            { value: 'species', label: 'Species' },
                                        ]}
                                    />
                                    <ItemFilter
                                        formLabel='Status'
                                        formValue={status}
                                        onChange={(e) => dispatch(setStatus(e.target.value))}
                                        radios={[
                                            { value: 'alive', label: 'Alive' },
                                            { value: 'dead', label: 'Dead' },
                                            { value: 'unknown', label: 'Unknown' },
                                        ]}
                                    />
                                    <ItemFilter
                                        formLabel='Gender'
                                        formValue={gender}
                                        onChange={(e) => dispatch(setGender(e.target.value))}
                                        radios={[
                                            { value: 'female', label: 'Female' },
                                            { value: 'male', label: 'Male' },
                                            { value: 'genderless', label: 'Genderless' },
                                            { value: 'unknown', label: 'Unknown' },
                                        ]}
                                    />
                                </>)
                                : (
                                    <ItemFilter
                                        formLabel='Search By'
                                        formValue={searchBy}
                                        onChange={(e) => dispatch(setSearchBy(e.target.value))}
                                        radios={[
                                            { value: 'name', label: 'Name' },
                                            { value: 'episode', label: 'Episode' },
                                        ]}
                                    />

                                )
                        }
                    </>
                )
            }
            {
                showFilter && (
                    <Button
                        sx={{
                            width: '100%',
                            borderRadius: 0,
                        }}
                        startIcon={<CleaningServicesIcon />} onClick={onClearFilters}>
                        Clear Filters
                    </Button>
                )
            }
            <Divider />
        </>
    )
}
