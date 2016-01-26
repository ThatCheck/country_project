FROM tomcat:8.0.20-jre8
RUN rm -f /usr/local/tomcat/conf/tomcat-users.xml
ADD tomcat-conf /usr/local/tomcat/conf
COPY project_country-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/project_country.war
