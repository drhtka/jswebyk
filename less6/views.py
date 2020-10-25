# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse
from less6.models import ProductModel

def JstDef6(request):
    return TemplateResponse(request, 'less6/html6.html')

def JsDefDz6(request):
    all_products = ProductModel.objects.values_list()
    print(all_products)
    return render(request, 'less6/htdz6.html', {'all_products': all_products})
