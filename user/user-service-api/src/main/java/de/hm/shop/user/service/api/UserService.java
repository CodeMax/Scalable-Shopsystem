package de.hm.shop.user.service.api;

import java.util.List;

import de.hm.shop.user.service.api.bo.UserBo;
import de.hm.shop.user.service.api.exception.UserException;


/**
 * User-Service.
 * @author Maximilian.Spelsberg
 */
public interface UserService {

	/**
	 * Liefert alle {@link UserBo}s zurück.
	 *
	 * @return alle {@link UserBo}s
	 */
	List<UserBo> getAll();



	/**
	 * Liefert das {@link UserBo} zu der übergebenen <code>id</code> zurück.
	 *
	 * @param id
	 *            die Id eines {@link UserBo}
	 *
	 * @return das {@link UserBo} zu der übergebenen <code>id</code> oder {@code null}, wenn keines gefunden wird.
	 */
	UserBo getById(long id);



	/**
	 * Speichert das übergebene {@link UserBo}.
	 *
	 * @param exampleBo
	 *            das zu speichernde {@link UserBo}
	 * @return das gespeicherte {@link UserBo}
	 * @throws UserException
	 */
	UserBo save(UserBo exampleBo) throws UserException;



	/**
	 * Löscht das {@link UserBo} zu der gegebenen <code>id</code>.
	 *
	 * @param id
	 *            die Id des zu löschenden {@link UserBo}
	 */
	void delete(final Long id);

}
