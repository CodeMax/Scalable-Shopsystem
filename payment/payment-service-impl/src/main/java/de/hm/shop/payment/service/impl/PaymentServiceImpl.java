package de.hm.shop.payment.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.commons.lang3.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.hm.shop.payment.dao.entity.PaymentEntity;
import de.hm.shop.payment.dao.repo.PaymentRepository;
import de.hm.shop.payment.service.api.PaymentService;
import de.hm.shop.payment.service.api.bo.PaymentBo;
import de.hm.shop.payment.service.api.exception.PaymentException;
import de.hm.shop.payment.service.impl.mapper.PaymentBoEntityMapper;


/**
 * Implementierung von {@link PaymentService}.
 * @author Maximilian.Spelsberg
 */
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	private static final Logger LOG = LoggerFactory.getLogger(PaymentServiceImpl.class);

	@Inject
	private PaymentRepository paymentRepository;

	@Inject
	private PaymentBoEntityMapper paymentMapper;



	@Transactional(readOnly = true)
	public List<PaymentBo> getAll() {
		final List<PaymentBo> paymentBos = new ArrayList<PaymentBo>();

		final Iterable<PaymentEntity> paymentEntities = paymentRepository.findAll();
		if (paymentEntities != null) {
			for (final PaymentEntity paymentEntity : paymentEntities) {
				paymentBos.add(paymentMapper.mapEntityToBo(paymentEntity));
			}
		}

		return paymentBos;
	}



	@Transactional(readOnly = true)
	public PaymentBo getById(final long id) {
		final PaymentEntity paymentEntity = paymentRepository.findOne(id);
		return paymentEntity != null ? paymentMapper.mapEntityToBo(paymentEntity) : null;
	}



	public PaymentBo save(final PaymentBo paymentBo) throws PaymentException {
		Validate.notNull(paymentBo);
		LOG.debug("Speichere Example mit Namen {}", paymentBo.getName());

		final PaymentEntity paymentEntity = paymentMapper.mapBoToEntity(paymentBo);
		final PaymentEntity paymentEntitySaved = paymentRepository.save(paymentEntity);

		return paymentMapper.mapEntityToBo(paymentEntitySaved);
	}



	public void delete(final Long id) {
		Validate.notNull(id);
		LOG.debug("Lösche Example mit Id {}", id);

		if (paymentRepository.exists(id)) {
			paymentRepository.delete(id);
		}
	}
}
