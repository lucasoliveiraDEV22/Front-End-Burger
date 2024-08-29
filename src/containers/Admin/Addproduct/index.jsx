import { useForm, Controller } from 'react-hook-form'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import ReactSelect from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Errors } from '../../../components'

import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'
import { useState, useEffect } from 'react'
import apiCodeBurger from '../../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const [fileProduct, setFileProduct] = useState(null)
  const [category, setCategory] = useState([])

  const navigate=useNavigate()

  useEffect(() => {
    async function loadCategory() {
      const { data } = await apiCodeBurger.get('categories')
      setCategory(data)
    }

    loadCategory()
  }, [])

  const schema = yup.object({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(
        /^[A-Za-záéíóúàãõâêôçÁÉÍÓÚÀÃÕÂÊÔÇ ]*$/,
        'Nome deve conter apenas letras'
      ),
    price: yup
      .number()
      .transform(value => (isNaN(value) ? undefined : value))
      .required('Preço é obrigatório'),
    category_id: yup.object().required('Categoria é obrigatória'),

    file: yup
      .mixed()
      .test('required', 'Selecione uma Imagem', value => {
        return value?.length > 0
      })
      .test('type', 'Selecione imagem jpeg ou png', value => {
        if(value && value.length > 0 ) {
          return value[0].type == 'image/jpeg' || value[0].type == 'image/png'
        }
        return true
      })
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
    const productFormData=new FormData()
    
    productFormData.append('name',data.name)
    productFormData.append('price',data.price)
    productFormData.append('file',data.file[0])
    productFormData.append('category_id',data.category_id.id)
   
    await toast.promise(
        apiCodeBurger.post('products', productFormData), {
        pending: 'Produto está sendo adicionado...',
        success: 'Produto adicionado com sucesso!',
        error: 'Erro ao adicionar o produto.'
      }
    )

    setTimeout(()=>{
      navigate('/listagemprodutos')
    },2000)

    setFileProduct(null)
    reset({ name: '', price: '', category_id: '' })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label>Nome</Label>
       
        <Input type="text" {...register('name')} error={errors.name?.message} />
        <Errors style={{position:'relative',bottom:13}}>{errors.name?.message}</Errors>
       
        
        <Label>Preço</Label>
        <Input type="number" {...register('price')} error={errors.price?.message}/>
        <Errors style={{position:'relative',bottom:13}}>{errors.price?.message}</Errors>
       

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
              {error && <Errors style={{position:'relative',bottom:27}}>{error.message}</Errors>}
            </>
          )}
        />
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <div className={errors.category_id?.message && 'reactSelectError'}>
            <ReactSelect
              {...field}
              options={category}
              getOptionLabel={categoria => categoria.name}
              getOptionValue={categoria => categoria._id}
              placeholder="Selecione a Categoria"
            />
            </div>
          )}
        />
        <Errors style={{position:'relative',bottom:13}}>{errors.category_id?.message}</Errors>
          
        <ButtonStyle type="submit">Adicionar Produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default AddProduct