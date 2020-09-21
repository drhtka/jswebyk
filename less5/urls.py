# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less5.views import JstDef5, JsDefDz5


urlpatterns = {
    path('', JstDef5),
    path('dz/', JsDefDz5),
}







