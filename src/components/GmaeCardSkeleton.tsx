import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const GmaeCardSkeleton = () => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Skeleton
                height={'200px'}
            />
            <CardBody>
                <SkeletonText />
            </CardBody>
      </Card>
    )
}
