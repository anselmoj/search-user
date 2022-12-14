/* eslint-disable no-undef */
import { Formik, FormikProps } from 'formik'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { ClearButton, FormikForm, Input, SearchButton } from '../styles'

export interface IProfileFilterData {
  search: string
}

interface IProfileFilterProps {
  onClear: () => void
  onSubmit: (data: IProfileFilterData) => void
}

const ProfileFilter: React.ForwardRefRenderFunction<
  FormikProps<IProfileFilterData>,
  IProfileFilterProps
> = ({ onClear, onSubmit }, ref) => {
  const filterFormikRef = useRef<FormikProps<IProfileFilterData>>(
    {} as FormikProps<IProfileFilterData>,
  )

  useImperativeHandle(ref, () => ({
    ...filterFormikRef.current,
  }))

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      innerRef={filterFormikRef}
      onSubmit={onSubmit}
    >
      {({ handleChange, values }) => (
        <FormikForm>
          <Input
            placeholder="Digite um perfil"
            name="search"
            onChange={handleChange('search')}
            value={values.search}
          />
          <ClearButton onClick={onClear} type="button">
            <FiX size={15} />
          </ClearButton>
          <SearchButton type="submit">
            <FiSearch size={15} />
          </SearchButton>
        </FormikForm>
      )}
    </Formik>
  )
}

export default forwardRef(ProfileFilter)
