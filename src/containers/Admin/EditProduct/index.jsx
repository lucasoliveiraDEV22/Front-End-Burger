import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Errors } from '../../../components'
import apiCodeBurguer from '../../../services/api'
import {
  ButtonStyle,
  Container,
  Input,
  InputContainer,
  Label,
  LabelUpload
} from './styles'

function AddProduct() {
  const [fileProduct, setFileProduct] = useState(null)
  const [category, setCategory] = useState([])
  const {
    state: { row }
  } = useLocation()
  console.log(row.category)

  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategory() {
      const { data } = await apiCodeBurguer.get('categories')
      setCategory(data)
    }

    loadCategory()
  }, [])

  const schema = yup.object({
    name: yup
      .string()
      .matches(
        /^[A-Za-záéíóúàãõâêôçÁÉÍÓÚÀÃÕÂÊÔÇ -]*$/,
        'Nome deve conter apenas letras, espaços e hífens'
      ),
    price: yup.number().transform(value => (isNaN(value) ? undefined : value)),
    category_id: yup.object(),
    offer: yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price)
    if (data.file && data.file.length > 0) {
      productFormData.append('file', data.file[0])
    }
    productFormData.append('category_id', data.category_id.id)
    productFormData.append('offer', data.offer)

    await toast.promise(
      apiCodeBurguer.put(`products/${row.id}`, productFormData),
      {
        pending: 'Produto está sendo editado...',
        success: 'Produto editado com sucesso!',
        error: 'Erro ao editar o produto.'
      }
    )

    setTimeout(() => {
      navigate('/listagemprodutos')
    }, 2000)

    setFileProduct(null)
    reset({ name: '', price: '', category_id: '' })
  }

  const formatPriceValue = priceString => {
    const numbersOnly = priceString.replace(/[^\d,.-]/g, '').replace(',', '.') // Remove símbolos e substitui vírgula por ponto
    return parseFloat(numbersOnly)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label>Nome</Label>

        <Input
          type="text"
          {...register('name')}
          defaultValue={row.name}
          error={errors.name?.message}
        />
        <Errors style={{ position: 'relative', bottom: 13 }}>
          {errors.name?.message}
        </Errors>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register('price')}
          defaultValue={formatPriceValue(row.price)}
          error={errors.price?.message}
        />
        <Errors style={{ position: 'relative', bottom: 13 }}>
          {errors.price?.message}
        </Errors>

        <Controller
          control={control}
          name="file"
          render={({ field: { onChange }, fieldState: { error } }) => (
            <>
              <LabelUpload error={error}>
                {fileProduct || (
                  <>
                    <CloudUploadIcon />
                    Enviar imagem do produto
                  </>
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={e => {
                    setFileProduct(e.target.files[0]?.name) // Atualiza o estado com o nome do arquivo
                    onChange(e.target.files) // Informa ao React Hook Form sobre a mudança, passando a lista de arquivos
                  }}
                />
              </LabelUpload>
              {error && (
                <Errors style={{ position: 'relative', bottom: 27 }}>
                  {error.message}
                </Errors>
              )}
            </>
          )}
        />
        <Controller
          name="category_id"
          control={control}
          defaultValue={row.category}
          render={({ field }) => (
            <div className={errors.category_id?.message && 'reactSelectError'}>
              <ReactSelect
                {...field}
                options={category}
                getOptionLabel={categoria => categoria.name}
                getOptionValue={categoria => categoria._id}
                placeholder="Selecione a Categoria"
                defaultValue={row.category}
              />
            </div>
          )}
        />
        <Errors style={{ position: 'relative', bottom: 13 }}>
          {errors.category_id?.message}
        </Errors>

        <InputContainer>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={row.offer}
          />
          <Label style={{ top: 0 }}>Produto em Oferta?</Label>
        </InputContainer>
        <ButtonStyle type="submit">Editar Produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default AddProduct
