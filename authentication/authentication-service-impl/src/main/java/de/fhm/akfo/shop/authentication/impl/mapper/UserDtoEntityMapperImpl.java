package de.fhm.akfo.shop.authentication.impl.mapper;

import de.fhm.akfo.shop.authentication.entity.Role;
import de.fhm.akfo.shop.authentication.entity.User;
import de.fhm.akfo.shop.authentication.service.api.dto.RoleDto;
import de.fhm.akfo.shop.authentication.service.api.dto.UserDto;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2016-06-29T14:45:29+0200",
    comments = "version: 1.0.0.Final, compiler: javac, environment: Java 1.8.0_60 (Oracle Corporation)"
)
public class UserDtoEntityMapperImpl implements UserDtoEntityMapper {

    @Override
    public UserDto entityToDto(User User) {
        if ( User == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( User.getId() );
        userDto.setUsername( User.getUsername() );
        userDto.setFirstname( User.getFirstname() );
        userDto.setLastname( User.getLastname() );
        userDto.setPassword( User.getPassword() );
        userDto.setAddress( User.getAddress() );
        userDto.setCity( User.getCity() );
        userDto.setPostcode( User.getPostcode() );
        userDto.setCountry( User.getCountry() );
        userDto.setFailedlogins( User.getFailedlogins() );

        if(User.getRoles() != null){
	        List<RoleDto> roleList = new ArrayList<RoleDto>();
	        for(Role r : User.getRoles()){
	        	roleList.add(roleEntityToDto(r));
	        }
	        userDto.setRoles(roleList);
        }
        
        return userDto;
    }

    @Override
    public User dtoToEntity(UserDto User) {
        if ( User == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( User.getUsername() );
        user.setFirstname( User.getFirstname() );
        user.setLastname( User.getLastname() );
        user.setPassword( User.getPassword() );
        user.setAddress( User.getAddress() );
        user.setCity( User.getCity() );
        user.setPostcode( User.getPostcode() );
        user.setCountry( User.getCountry() );
        user.setFailedlogins( User.getFailedlogins() );

        if(User.getRoles() != null){
	        List<Role> roleList = new ArrayList<Role>();
	        for(RoleDto r : User.getRoles()){
	        	roleList.add(roleDtoToEntity(r));
	        }
	        user.setRoles(roleList);
        }
        
        return user;
    }

    @Override
    public Role roleDtoToEntity(RoleDto Dto) {
        if ( Dto == null ) {
            return null;
        }

        Role role = new Role();

        role.setRole( Dto.getRole() );

        return role;
    }

    @Override
    public RoleDto roleEntityToDto(Role role) {
        if ( role == null ) {
            return null;
        }

        RoleDto roleDto = new RoleDto();

        roleDto.setRole( role.getRole() );

        return roleDto;
    }
}
