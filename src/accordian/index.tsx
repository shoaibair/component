import React from 'react'
import { Accordion, Text, Icon, View, Content } from 'native-base'
import { FlatList } from 'react-native'

type AccordionProps = {
  dataArray: {
    title: string
    content: string
  }[]
}

type TtemType = {
  title: string
}

function VirtualizedView(props: any) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  )
}

const AccordionComponent = ({ dataArray }: AccordionProps) => {
  const renderHeader = (item: TtemType, expanded: boolean) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}
      >
        <Text style={{ fontWeight: '600' }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    )
  }

  return (
    <VirtualizedView>
      <Content padder>
        <Accordion
          expanded={[0]}
          dataArray={dataArray}
          renderHeader={renderHeader}
        />
      </Content>
    </VirtualizedView>
  )
}

export default AccordionComponent
