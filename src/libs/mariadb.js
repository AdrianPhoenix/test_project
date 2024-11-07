import mariadb from 'serverless-mysql'

export const conn = mariadb({
    config:{
        host: 'bubf0qpjmgs4y8hk4d2u-mysql.services.clever-cloud.com',
        user: 'uzmrkwehlzfdsw4o',
        password: 'vggCCwKmIAu8tv0YmYoX',
        port:3306,
        database: 'bubf0qpjmgs4y8hk4d2u'
    }
})