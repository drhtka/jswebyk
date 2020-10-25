# -*- coding: utf-8 -*-
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils import timezone


# Create your models here.

class ProductModel(models.Model):

    class Meta:
        verbose_name = 'Тоовар'
        verbose_name_plural = 'Товары'
        db_table = 'products_six'

    id = models.AutoField(primary_key=True, auto_created=True, null=False)
    productsname = models.CharField('Название', max_length=20, blank=True, null=True)
    #catid = models.IntegerField('id категории', null=True)
    price = models.CharField(max_length=30, verbose_name='Цена', blank=True)
    num_product = models.PositiveIntegerField('Номер продукта', auto_created=True, null=True, unique=True)


    def publich(self):
        self.order_date = timezone.now()
        self.save()

    def __str__(self):
        return self.productsname
