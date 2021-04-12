import React, { useState } from 'react'
import { Button, Content, Form, Item, Input, Text } from 'native-base'
import { View } from 'react-native'

type LoginProps = {
  onSubmit: ({
    userName,
    password,
  }: {
    userName: string
    password: string
  }) => void
}

export const Login = ({ onSubmit }: LoginProps) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  console.log("Login `1");

  const onSubmitHandler = () => {
    console.log({
      userName,
      password,
    })
    onSubmit({
      userName,
      password,
    })
  }

  return (
    <Content>
      <Form>
        <Item>
          <Input onChangeText={setUserName} placeholder="Username" />
        </Item>
        <Item last>
          <Input
            textContentType="password"
            onChangeText={setPassword}
            placeholder="Password"
          />
        </Item>
      </Form>
      <View style={{ display: 'flex', marginTop: 22, padding: 10 }}>
        <Button onPress={onSubmitHandler}>
          <Text>Login Now</Text>
        </Button>
      </View>
    </Content>
  )
}
